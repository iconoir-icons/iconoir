import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ShoppingCode extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ShoppingCode({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 5V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 5V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 5V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 10V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 18.5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 18.5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 18.5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 18.5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 14V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 13V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 5V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 9V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
