import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Tournament extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Tournament({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3L8.00001 3L8.00001 9H3" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 6L15 6L15 18H8" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 12L22 12" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 15L8.00001 15L8.00001 21H3" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
