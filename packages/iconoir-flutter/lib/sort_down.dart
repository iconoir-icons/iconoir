import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SortDown extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SortDown({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 10L2 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 14H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 18H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 6L2 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 10V20M19 20L22 17M19 20L16 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
