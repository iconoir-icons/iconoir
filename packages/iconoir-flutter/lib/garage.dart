import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Garage extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Garage({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 20H3V6L12 4L21 6V20H18M6 20H18M6 20V16M18 20V16M6 12V8L18 8V12M6 12L18 12M6 12V16M18 12V16M6 16H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
