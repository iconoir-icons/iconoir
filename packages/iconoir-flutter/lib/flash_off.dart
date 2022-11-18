import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FlashOff extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const FlashOff({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.79459 8.78243L5 14H11V21L15 15.5M17.1818 12.5L19 10H13V3L10.8182 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 4L20 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
