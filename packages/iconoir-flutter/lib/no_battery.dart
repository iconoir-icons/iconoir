import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class NoBattery extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const NoBattery({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 10V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.5 6H3C1.89543 6 1 6.89543 1 8V16C1 17.1046 1.89543 18 3 18H17.5M20 14.5V8C20 6.89543 19.1046 6 18 6H11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}