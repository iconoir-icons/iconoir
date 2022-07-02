import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BusStop extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BusStop({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16.01L16.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 16.01L6.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 22V15V8M20 8H18L18 2H22V8H20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 20V22H6V20H4Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 20V22H16V20H14Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 20H2.6C2.26863 20 2 19.7314 2 19.4V12.6C2 12.2686 2.26863 12 2.6 12H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 8H6M14 2H6C3.79086 2 2 3.79086 2 6V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
