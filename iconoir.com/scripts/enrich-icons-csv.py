#!/usr/bin/env python3
"""
Merge generated search keywords into icons.csv while preserving existing tags.
Run from repo root: python3 scripts/enrich-icons-csv.py
"""
from __future__ import annotations

import csv
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CSV_PATH = ROOT / "icons.csv"

# Multi-token phrases (longest match wins when scanning filename parts).
PHRASE_KEYWORDS: dict[str, str] = {
    "air-conditioner": "ac,hvac,cooling,climate",
    "align-horizontal-centers": "center,layout,figma,design",
    "align-vertical-centers": "middle,layout,figma,design",
    "chat-bubble": "message,sms,conversation,texting",
    "credit-card": "payment,visa,checkout,billing",
    "dots-grid": "menu,kebab,app grid,launcher",
    "light-bulb": "idea,brightness,lamp,insight",
    "log-in": "signin,login,enter,auth",
    "log-out": "signout,logout,exit,auth",
    "map-pin": "location,marker,place,gps",
    "microphone": "mic,audio,record,voice,sound",
    "shopping-bag": "cart,buy,store,checkout",
    "text-size": "typography,font,scale,aa",
    "user-circle": "profile,avatar,account,person",
    "user-square": "profile,avatar,account,person",
    "voice-check": "biometric,speaker,verification",
    "wifi-signal": "internet,wireless,lan,hotspot",
    "xmark-circle": "close,cancel,error,invalid",
    "zoom-in": "magnify,scale,enlarge,search",
    "zoom-out": "magnify,scale,shrink,overview",
    "short-pants": "shorts,summer,casual,legwear",
    "short-pants-pockets": "shorts,cargo,summer,casual",
}

# Single-token expansions (icon name segments).
TOKEN_KEYWORDS: dict[str, str] = {
    "accessibility": "a11y,wheelchair,inclusive,wcag",
    "activity": "pulse,fitness,exercise,workout,sport,steps",
    "adobe": "creative,suite,design",
    "agile": "scrum,sprint,methodology,team",
    "airplane": "plane,flight,travel,airline,jet",
    "airplay": "cast,stream,apple,tv,screen mirror",
    "alarm": "clock,wake,timer,morning,schedule",
    "album": "photos,music,record,collection,gallery",
    "align": "alignment,layout,text,edge",
    "antenna": "radio,signal,tower,broadcast,reception",
    "app": "application,software,program",
    "apple": "fruit,food,ios,mac",
    "arcade": "game,joystick,retro,coinop",
    "archery": "bow,arrow,target,sport",
    "archive": "storage,zip,backup,box",
    "arrow": "direction,navigate,pointer,chevron,move",
    "asterisk": "star,wildcard,footnote,required",
    "atom": "science,chemistry,physics,nuclear",
    "baby": "child,infant,kid,newborn",
    "bag": "luggage,suitcase,travel,pack",
    "balloon": "party,celebration,float",
    "bank": "money,finance,building,cash",
    "barcode": "scan,sku,product,inventory",
    "basket": "shopping,cart,groceries",
    "battery": "power,charge,energy,level,electric",
    "beach": "sea,ocean,vacation,sand",
    "bell": "notification,alert,ring,sound,reminder",
    "bicycle": "bike,cycling,transport,pedal",
    "bitcoin": "crypto,currency,blockchain,btc",
    "bluetooth": "wireless,pairing,peripheral",
    "bounce": "spring,easing,oscillate,elastic,animation",
    "book": "read,education,library,learn",
    "bookmark": "save,favorite,marker,tab",
    "border": "outline,stroke,frame,edge",
    "brain": "mind,ai,think,mental",
    "briefcase": "work,business,job,office",
    "brush": "paint,art,draw,design",
    "bug": "insect,issue,defect,debug,error",
    "building": "city,office,architecture,place",
    "bus": "transport,public,transit,vehicle",
    "cake": "birthday,dessert,sweet,party",
    "calendar": "date,schedule,event,planner,month",
    "camera": "photo,picture,lens,shoot,selfie",
    "candlestick": "trading,stocks,chart,finance",
    "car": "vehicle,drive,auto,transport",
    "cart": "shopping,basket,ecommerce,checkout",
    "cash": "money,bills,currency,payment",
    "chat": "message,talk,conversation,support",
    "check": "done,success,tick,approve,ok,complete",
    "church": "religion,wedding,building,faith",
    "cinema": "movie,film,theater,video",
    "circle": "round,radio,dot,shape",
    "clipboard": "paste,copy,notes,task",
    "clock": "time,watch,hour,schedule",
    "cloud": "sync,storage,online,backup,weather",
    "code": "develop,programming,source,script",
    "coffee": "cafe,drink,morning,caffeine",
    "coin": "money,currency,crypto,token",
    "color": "palette,paint,tint,hue",
    "community": "people,group,social,team",
    "compass": "navigation,direction,map,orient",
    "control": "slider,handle,adjust,parameter",
    "couple": "pair,two,double,twin",
    "compress": "squeeze,zip,shrink,minimize",
    "computer": "desktop,pc,monitor,workstation",
    "cookie": "biscuit,privacy,tracking,site",
    "copy": "duplicate,clipboard,clone",
    "copyright": "legal,license,ip,rights",
    "corner": "radius,edge,curve,layout",
    "crop": "trim,edit,image,frame",
    "crown": "king,winner,vip,premium",
    "cube": "3d,box,volume,solid",
    "cursor": "mouse,pointer,click,select",
    "curve": "bezier,spline,path,smooth",
    "cut": "scissors,clip,edit,slice",
    "cycling": "bike,bicycle,sport,pedal",
    "dashboard": "panel,metrics,analytics,home",
    "database": "db,sql,storage,server,data",
    "delivery": "shipping,parcel,courier,package",
    "design": "draw,sketch,prototype,ui",
    "dice": "random,game,chance,roll",
    "discord": "chat,gaming,voice,community",
    "dna": "genetics,biology,science,helix",
    "dog": "pet,animal,puppy,bark",
    "dollar": "money,usd,currency,cash",
    "donate": "charity,gift,support,heart",
    "download": "save,import,fetch,get,file",
    "drag": "move,grab,gesture,pan",
    "drone": "quadcopter,uav,fly,remote",
    "ease": "easing,curve,bezier,interpolation,css,tween",
    "emoji": "emotion,face,reaction,sticker",
    "ev": "electric,vehicle,car,charging",
    "eye": "view,watch,visibility,privacy",
    "fast": "speed,quick,running,performance",
    "filter": "sort,refine,funnel",
    "fingerprint": "biometric,identity,touchid,auth",
    "fire": "flame,hot,burn,trending",
    "fish": "seafood,animal,ocean,swim",
    "flag": "country,mark,pin,report",
    "flame": "fire,hot,trending,streak",
    "flash": "lightning,photo,speed,bolt",
    "flask": "science,lab,chemistry,experiment",
    "flower": "plant,bloom,garden,nature",
    "folder": "directory,files,organize,project",
    "football": "soccer,sport,ball,game",
    "fork": "git,branch,food,repo",
    "frame": "border,art,picture,layout",
    "fridge": "kitchen,appliance,cold,food",
    "gauge": "meter,speed,dashboard,dial",
    "gesture": "touch,swipe,hand,mobile",
    "git": "version,branch,commit,merge,github",
    "glass": "lens,magnify,search,look",
    "glasses": "eyeglasses,spectacles,sunglasses,vision,reading",
    "globe": "world,earth,international,map",
    "google": "search,gmail,drive,workspace",
    "graduation": "school,education,diploma,student",
    "handbag": "purse,bag,womens,fashion,accessory",
    "hat": "cap,headwear,fashion,style",
    "grid": "table,layout,matrix,cells",
    "gym": "fitness,workout,dumbbell,weights",
    "hashtag": "tag,trend,social,pound",
    "headset": "audio,headphones,support,call",
    "heart": "love,favorite,like,health",
    "heavy": "bold,weight,thick",
    "hexagon": "shape,polygon,six,sides",
    "home": "house,main,start,residence",
    "hospital": "medical,health,clinic,care",
    "hourglass": "loading,wait,time,sand",
    "ice": "cold,winter,frozen,cream",
    "import": "upload,bring,inbound",
    "infinite": "loop,forever,endless,repeat",
    "info": "help,about,details,hint",
    "internet": "web,online,www,browser",
    "italic": "text,style,editor,font",
    "journal": "diary,notes,book,log",
    "kanban": "board,tasks,workflow,agile",
    "key": "password,unlock,security,login",
    "keyframe": "animation,timeline,motion,ae",
    "keyframes": "animation,timeline,motion,ae,curve",
    "label": "tag,ticket,name,badge",
    "lamp": "light,desk,brightness,fixture",
    "laptop": "notebook,computer,macbook,work",
    "leaf": "eco,nature,plant,green",
    "light": "lamp,brightness,bulb,idea",
    "linear": "interpolation,ramp,constant,animation,curve",
    "link": "url,hyperlink,chain,attach",
    "linux": "ubuntu,terminal,open source,tux",
    "list": "bullet,menu,rows,items",
    "lock": "secure,password,private,encrypt",
    "lot": "money,cash,stack,bills",
    "love": "heart,romance,valentine",
    "mac": "apple,keyboard,shortcut,osx",
    "magic": "wand,effect,auto,enhance",
    "magnet": "attract,science,polarity",
    "mail": "email,message,inbox,letter",
    "male": "man,gender,people,person",
    "map": "location,gps,travel,directions",
    "mask": "privacy,crop,layer,photo",
    "mastodon": "fediverse,social,toot",
    "medal": "award,prize,winner,achievement",
    "megaphone": "announce,broadcast,speak,marketing",
    "menu": "hamburger,navigation,drawer,list",
    "message": "chat,mail,dm,conversation",
    "metro": "subway,train,underground,transit",
    "minus": "subtract,remove,delete,collapse",
    "mirror": "reflect,symmetry,flip",
    "mobile": "phone,cell,smartphone,ios,android",
    "modern": "tv,screen,display,entertainment",
    "moon": "night,dark,mode,sleep",
    "mouse": "pointer,click,computer,pc",
    "movie": "film,video,cinema,play",
    "music": "audio,song,note,sound",
    "network": "lan,internet,nodes,topology",
    "nfc": "contactless,tap,pay,tag",
    "no": "forbidden,stop,banned,block",
    "notes": "music,memo,postit,song",
    "off": "disabled,inactive,muted,disconnected",
    "oil": "fuel,energy,gas,car",
    "open": "door,access,launch,expand",
    "organic": "natural,eco,leaf,healthy",
    "page": "document,paper,file,site",
    "paint": "brush,color,bucket,fill",
    "palette": "colors,swatch,theme,design",
    "parking": "car,lot,space,garage",
    "pause": "stop,wait,hold,interrupt",
    "peerlist": "social,profile,community",
    "pen": "write,draw,edit,signature",
    "people": "users,group,team,crowd",
    "percent": "discount,sale,ratio,math",
    "phone": "call,mobile,contact,dial",
    "pin": "location,map,marker,attach",
    "pizza": "food,slice,italian,meal",
    "planet": "space,orbit,astro,science",
    "point": "anchor,handle,node,bezier",
    "play": "start,run,media,video",
    "plug": "socket,power,cable,connect",
    "plus": "add,new,create,increase",
    "polar": "coordinates,graph,math,axis",
    "pool": "swim,water,summer,sport",
    "pants": "trousers,legs,clothing,fashion,bottom",
    "pockets": "cargo,detail,storage,clothing",
    "post": "blog,article,mail,letter",
    "presentation": "slides,deck,keynote,pitch",
    "printer": "print,paper,office,device",
    "priority": "important,flag,urgent,star",
    "puzzle": "piece,game,solve,extension",
    "qr": "code,scan,mobile,link",
    "question": "help,faq,unknown,support",
    "rain": "weather,storm,water,wet",
    "receive": "inbox,download,get,import",
    "refresh": "reload,update,sync,rotate",
    "report": "analytics,chart,summary,data",
    "rewind": "back,previous,undo,media",
    "rhombus": "diamond,shape,geometry",
    "rocket": "launch,startup,space,ship",
    "rotate": "spin,turn,orientation,pivot",
    "router": "wifi,network,internet,modem",
    "running": "run,jog,sport,fitness",
    "ruler": "measure,size,distance,design",
    "safe": "vault,security,deposit,lock",
    "sandals": "shoes,summer,footwear",
    "save": "disk,store,persist,download",
    "scan": "qr,barcode,camera,detect",
    "science": "lab,research,experiment,study",
    "search": "find,magnify,lookup,query",
    "send": "share,submit,mail,deliver",
    "server": "hosting,backend,cloud,database",
    "settings": "gear,preferences,options,config",
    "share": "export,social,link,send",
    "shield": "security,safe,protection,trust",
    "ship": "boat,delivery,maritime,ocean",
    "shirt": "clothes,fashion,apparel,cotton",
    "shop": "store,buy,market,retail",
    "shopping": "cart,bag,buy,ecommerce",
    "shuffle": "random,music,order,mix",
    "sidebar": "panel,drawer,layout,navigation",
    "sign": "signature,board,street,wayfinding",
    "skateboard": "sport,street,wheel,ride",
    "skip": "next,forward,media,chapter",
    "sleep": "night,bed,rest,zzz",
    "smartphone": "phone,mobile,touch,device",
    "snow": "winter,cold,flake,weather",
    "soap": "wash,clean,bathroom,hygiene",
    "soccer": "football,sport,ball,game",
    "sound": "audio,volume,speaker,listen",
    "spark": "ai,magic,new,highlight",
    "sparks": "stars,celebrate,glitter,effect",
    "sphere": "ball,3d,globe,shape",
    "spiral": "twist,curl,hypnosis,shape",
    "square": "shape,box,checkbox,region",
    "star": "favorite,rating,review,bookmark",
    "stats": "chart,analytics,metrics,graph",
    "stop": "halt,square,media,end",
    "store": "shop,market,appstore,retail",
    "sun": "day,brightness,weather,light",
    "scarf": "neck,winter,warm,fashion,wrap",
    "slips": "lingerie,underwear,clothing,inner",
    "surf": "wave,sport,ocean,beach",
    "suitcase": "luggage,travel,bag,rollaboard",
    "sword": "weapon,fight,game,rpg",
    "tag": "label,badge,chip,price",
    "taxi": "cab,ride,uber,city",
    "tennis": "sport,racket,ball,court",
    "text": "typography,type,font,paragraph",
    "thermometer": "temperature,weather,heat,fever",
    "three": "3,triple,triangle,menu",
    "thunder": "storm,lightning,weather,bolt",
    "ticket": "event,pass,coupon,booking",
    "timer": "countdown,stopwatch,clock,alarm",
    "tool": "wrench,settings,build,repair",
    "transition": "css,animate,morph,blend,crossfade",
    "train": "rail,metro,transport,locomotive",
    "tram": "streetcar,transport,public",
    "translate": "language,i18n,locale,global",
    "trash": "delete,bin,remove,garbage",
    "tree": "nature,plant,forest,green",
    "trophy": "winner,award,achievement,prize",
    "truck": "delivery,shipping,vehicle,cargo",
    "two": "2,double,pair,both",
    "umbrella": "rain,parasol,weather,cover,sunshade",
    "u": "turn,uturn,reverse,direction",
    "upload": "cloud,send,export,share",
    "user": "person,account,profile,avatar",
    "vegan": "plant,leaf,food,diet",
    "vertical": "portrait,column,upright",
    "video": "film,record,camera,clip",
    "voice": "speech,mic,audio,assistant",
    "volume": "sound,loud,audio,level",
    "vr": "virtual,reality,headset,immersive",
    "walk": "pedestrian,steps,fitness,hike",
    "wallet": "money,cards,purse,finance",
    "warning": "alert,caution,danger,attention",
    "wash": "laundry,clean,soap,clothes",
    "web": "browser,internet,site,page",
    "weight": "scale,kg,fitness,health",
    "whatsapp": "chat,messaging,meta,bubble",
    "wheel": "car,tire,rim,vehicle",
    "white": "flag,surrender,peace,truce",
    "wifi": "wireless,internet,signal,network",
    "wind": "weather,air,breeze,forecast",
    "windows": "microsoft,os,desktop,pc",
    "wolf": "animal,dog,wild,nature",
    "wrap": "text,line,break,paragraph",
    "wrench": "tool,settings,repair,fix",
    "wristwatch": "time,clock,wearable,watch",
    "www": "website,internet,browser,url",
    "x": "twitter,social,close,letter",
    "xmark": "close,cancel,delete,remove,dismiss,clear,wrong",
    "yen": "jpy,currency,money,japan",
    "yoga": "meditation,fitness,pose,wellness",
    "youtube": "video,stream,google,channel",
    "z": "axis,coordinate,math,plane",
}

# Per-filename overrides for ambiguous or very short names.
FILENAME_KEYWORDS: dict[str, str] = {
    "activity": "pulse,fitness,exercise,chart,graph",
    "alarm": "clock,wake,timer,morning",
    "app-window": "desktop,gui,application,software",
    "app-notification": "push,inbox,badge,alert",
    "area-search": "region,selection,lasso,find",
    "dns": "domain,network,lookup,server",
    "peerlist": "social,network,profile,directory",
    "polar-sh": "polar,coordinates,math,graph",
    "ice-cream": "dessert,gelato,sweet,summer",
    "mastodon": "fediverse,toot,social,opensource",
    "meter-arrow-down-right": "gauge,trend,decrease,metric",
    "rhombus-arrow-right": "diamond,direction,map,navigate",
    "u-turn-arrow-left": "reverse,return,back,direction",
    "u-turn-arrow-right": "reverse,return,back,direction",
    "calendar-arrow-down": "schedule,scroll,pick date,datepicker",
    "calendar-arrow-up": "schedule,scroll,pick date,datepicker",
    "calendar-check": "event,rsvp,appointment,confirmed",
    "calendar-rotate": "sync,refresh,timezone,reschedule",
    "calendar-xmark": "cancel,delete event,remove,busy",
    "cube-dots": "3d,vertices,model,scan",
    "cube-scan": "3d,measure,ar,lidar",
    "dots-grid-3x3": "app drawer,menu,launcher,grid",
    "asterisk": "star,wildcard,required,footnote",
    "hashtag": "pound,trend,topic,social",
    "x": "twitter,social,logo,brand",
}

# Light category hints (only used when merged tag count is still low).
CATEGORY_BOOST: dict[str, str] = {
    "3D Editor": "3d,modeling,mesh,render",
    "Actions": "ui,button,control,interface",
    "Activities": "sport,hobby,leisure,outdoor",
    "Animations": "animation,motion,timeline,easing,keyframe,transition",
    "Animals": "creature,wildlife,nature,pet",
    "Audio": "sound,music,speaker,listen",
    "Buildings": "architecture,city,place,urban",
    "Business": "work,office,company,meeting",
    "Cloud": "sync,online,storage,backup",
    "Clothing": "fashion,apparel,outfit,wear,style",
    "Communication": "chat,message,contact,talk",
    "Connectivity": "network,internet,signal,online",
    "Database": "data,sql,storage,server",
    "Design Tools": "design,creative,layout,figma",
    "Development": "code,dev,programming,software",
    "Devices": "hardware,gadget,electronics,tech",
    "Docs": "document,file,paper,text",
    "Editor": "text,writing,format,content",
    "Finance": "money,payment,banking,budget",
    "Food": "meal,restaurant,cooking,kitchen",
    "Gaming": "game,play,controller,fun",
    "Gestures": "touch,swipe,mobile,hand",
    "Health": "medical,wellness,care,fitness",
    "Home": "house,domestic,appliance,interior",
    "Identity": "auth,login,security,person",
    "Layout": "grid,structure,template,spacing",
    "Maps": "location,gps,travel,directions",
    "Music": "audio,song,instrument,sound",
    "Nature": "outdoor,plant,environment,earth",
    "Navigation": "menu,move,ui,wayfinding",
    "Organization": "sort,manage,structure,productivity",
    "Other": "misc,general,utility,ui",
    "Photos and Videos": "media,image,camera,record",
    "Science": "lab,research,experiment,study",
    "Security": "safe,lock,protect,privacy",
    "Shapes": "geometry,figure,vector,draw",
    "Shopping": "cart,buy,store,ecommerce",
    "Social": "network,share,community,people",
    "System": "computer,os,settings,desktop",
    "Tools": "utility,build,repair,wrench",
    "Transport": "travel,vehicle,commute,trip",
    "Typography": "font,text,type,letters",
    "Users": "people,profile,account,team",
    "Weather": "forecast,climate,rain,sun",
}


def split_tags(raw: str | None) -> list[str]:
    if not raw or not str(raw).strip():
        return []
    parts: list[str] = []
    for chunk in re.split(r"[|,]", str(raw)):
        t = chunk.strip()
        if t:
            parts.append(t)
    return parts


def join_tags(tags: list[str]) -> str:
    seen: set[str] = set()
    ordered: list[str] = []
    for t in tags:
        key = t.lower()
        if key in seen:
            continue
        seen.add(key)
        ordered.append(t)
    return ",".join(ordered)


def collect_keywords(filename: str, category: str) -> list[str]:
    out: list[str] = []
    if filename in FILENAME_KEYWORDS:
        out.extend(split_tags(FILENAME_KEYWORDS[filename]))
    parts = filename.split("-")
    # Phrases up to 4 tokens
    n = len(parts)
    for size in range(2, min(5, n + 1)):
        for i in range(n - size + 1):
            phrase = "-".join(parts[i : i + size])
            if phrase in PHRASE_KEYWORDS:
                out.extend(split_tags(PHRASE_KEYWORDS[phrase]))
    for p in parts:
        if p in TOKEN_KEYWORDS:
            out.extend(split_tags(TOKEN_KEYWORDS[p]))
    # Category boost if still few keywords
    if len(out) < 4 and category in CATEGORY_BOOST:
        out.extend(split_tags(CATEGORY_BOOST[category]))
    return out


def main() -> None:
    rows: list[dict[str, str]] = []
    with CSV_PATH.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        fieldnames = [fn for fn in reader.fieldnames if fn]  # drop None
        for row in reader:
            clean = {k: (row.get(k) or "").strip() for k in fieldnames}
            rows.append(clean)

    for row in rows:
        filename = row["filename"]
        category = row["category"]
        existing = split_tags(row.get("tags"))
        generated = collect_keywords(filename, category)
        merged = join_tags([*existing, *generated])
        row["tags"] = merged

    with CSV_PATH.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(
            f,
            fieldnames=["filename", "category", "tags"],
            quoting=csv.QUOTE_ALL,
            lineterminator="\n",
        )
        writer.writeheader()
        for row in rows:
            writer.writerow(
                {
                    "filename": row["filename"],
                    "category": row["category"],
                    "tags": row["tags"],
                }
            )

    print(f"Wrote {len(rows)} rows to {CSV_PATH}")


if __name__ == "__main__":
    main()
