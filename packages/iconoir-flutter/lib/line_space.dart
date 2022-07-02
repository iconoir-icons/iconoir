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
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 7H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 12H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 17H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 17V7M6 17L4 14.5M6 17L8 14.5M6 7L4 9M6 7L8 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
