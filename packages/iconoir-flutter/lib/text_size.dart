import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TextSize extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const TextSize({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7L3 5L17 5V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 5L10 19M10 19H12M10 19H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 14L13 12H21V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 12V19M17 19H15.5M17 19H18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
