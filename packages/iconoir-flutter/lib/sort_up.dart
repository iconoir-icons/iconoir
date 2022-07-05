import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SortUp extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SortUp({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 14L2 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 18H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 14V4M19 4L22 7M19 4L16 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
