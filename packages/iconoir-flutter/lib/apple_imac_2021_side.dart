import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AppleImac2021Side extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const AppleImac2021Side({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22L8 22M14 22L8 22M8 22L10 13.5M10 13.5L7 2M10 13.5L11.5 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 22L18 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
