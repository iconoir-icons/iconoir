import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RulerMinus extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const RulerMinus({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 5H18H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 7V2.6C11 2.26863 10.7314 2 10.4 2H3.6C3.26863 2 3 2.26863 3 2.6V21.4C3 21.7314 3.26863 22 3.6 22H10.4C10.7314 22 11 21.7314 11 21.4V17M11 7H8M11 7V12M11 12H8M11 12V17M11 17H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}