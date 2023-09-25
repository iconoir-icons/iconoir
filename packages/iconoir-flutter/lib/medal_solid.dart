import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MedalSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const MedalSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.6479 1.30772C14.2654 1.14863 13.8264 1.32969 13.6673 1.71213L12.6273 4.21213C12.4682 4.59457 12.6493 5.03357 13.0317 5.19267C13.4142 5.35176 13.8532 5.17071 14.0123 4.78826L15.0523 2.28826C15.2114 1.90582 15.0303 1.46682 14.6479 1.30772ZM18.3027 1.31408C17.9238 1.1468 17.481 1.31837 17.3137 1.6973L13.8642 9.51097C13.6677 9.45463 13.4676 9.40697 13.2643 9.36843L9.50886 1.67133C9.32723 1.29906 8.87821 1.14452 8.50594 1.32614C8.13368 1.50777 7.97913 1.9568 8.16076 2.32906L11.5449 9.26528C10.8899 9.30887 10.2605 9.44589 9.6698 9.66314L5.67063 1.66479C5.48539 1.2943 5.03489 1.14413 4.6644 1.32938C4.29392 1.51462 4.14375 1.96512 4.32899 2.33561L8.32863 10.3349C6.47551 11.5382 5.24981 13.6261 5.24981 16.0002C5.24981 19.7281 8.27189 22.7502 11.9998 22.7502C15.7277 22.7502 18.7498 19.7281 18.7498 16.0002C18.7498 13.451 17.3367 11.2319 15.2511 10.0834L18.6859 2.30309C18.8532 1.92416 18.6816 1.48137 18.3027 1.31408Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}