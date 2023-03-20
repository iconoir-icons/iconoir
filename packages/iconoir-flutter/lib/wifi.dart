import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Wifi extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Wifi({Key? key, this.color, this.width, this.height}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19.51L12.01 19.4989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 8C8 3.5 16 3.5 22 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12C9 9 15 9 19 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 15.5C10.7504 14.1 13.2498 14.0996 15.5001 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
