import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BeachBagBig extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BeachBagBig({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.76923 12L2.13717 8.71331C2.06601 8.34327 2.34956 8 2.72638 8H21.2736C21.6504 8 21.934 8.34327 21.8628 8.71331L21.2308 12M2.76923 12H21.2308M2.76923 12L3.38462 16M21.2308 12L20.6154 16M20.6154 16L20.0783 19.4912C20.0332 19.7839 19.7814 20 19.4852 20H4.51475C4.21861 20 3.96676 19.7839 3.92173 19.4912L3.38462 16M20.6154 16H3.38462M5 8V6C5 4.89543 5.89543 4 7 4H17C18.1046 4 19 4.89543 19 6V8" stroke="currentColor" stroke-width="1.5"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
