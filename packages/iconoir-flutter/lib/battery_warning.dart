import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BatteryWarning extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BatteryWarning({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 10V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 16V8C1 6.89543 1.89543 6 3 6H18C19.1046 6 20 6.89543 20 8V16C20 17.1046 19.1046 18 18 18H3C1.89543 18 1 17.1046 1 16Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M10.5 9L10.5 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 15.01L10.51 14.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
