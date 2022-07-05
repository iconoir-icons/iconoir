import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FastArrowTop extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const FastArrowTop({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 16.5L12 13L8.5 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 10.5L12 7L8.5 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
