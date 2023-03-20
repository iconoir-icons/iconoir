import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LineSpace extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const LineSpace({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 6H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 18H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 19V5M5 19L3 16.5M5 19L7 16.5M5 5L3 7M5 5L7 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
