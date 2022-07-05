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
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 8L4 6L16 6V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 6L10 18M10 18H12M10 18H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 13.5L14 12L20 12V13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 12V18M17 18H15.5M17 18H18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
