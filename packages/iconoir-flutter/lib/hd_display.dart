import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HdDisplay extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HdDisplay({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" stroke-width="1.5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 8.5V12M5.5 15.5V12M5.5 12H10M10 12L10 8.5M10 12L10 15.5" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5 12V8.5C16 8.5 18.5 8.5 18.5 12C18.5 15.5 16 15.5 13.5 15.5V12Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 18.4V5.6C2 5.26863 2.26863 5 2.6 5H21.4C21.7314 5 22 5.26863 22 5.6V18.4C22 18.7314 21.7314 19 21.4 19H2.6C2.26863 19 2 18.7314 2 18.4Z" stroke="currentColor" />
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
