import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ShopFourTilesWindow extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ShopFourTilesWindow({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9" stroke="currentColor" stroke-width="1.5"/>
<path d="M20.485 3H16.4933L16.9933 8C16.9933 8 17.9933 9 19.4933 9C20.5703 9 21.3036 8.48445 21.6316 8.1937C21.7623 8.07782 21.8101 7.90091 21.7814 7.72861L21.0768 3.50136C21.0286 3.21205 20.7783 3 20.485 3Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M16.4933 3L16.9933 8C16.9933 8 15.9933 9 14.4933 9C12.9933 9 11.9933 8 11.9933 8V3H16.4933Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M11.9933 3V8C11.9933 8 10.9933 9 9.49329 9C7.99329 9 6.99329 8 6.99329 8L7.49329 3H11.9933Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M7.49331 3H3.50158C3.20828 3 2.95797 3.21205 2.90975 3.50136L2.2052 7.72862C2.17649 7.90091 2.22432 8.07782 2.35502 8.1937C2.68294 8.48445 3.41626 9 4.49329 9C5.99329 9 6.99331 8 6.99331 8L7.49331 3Z" stroke="currentColor" stroke-width="1.5"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}