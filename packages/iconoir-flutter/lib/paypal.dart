import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Paypal extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Paypal({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 17.5L6 3L13 3C19 3 19 12 13 12H8.7L7.5 17.5H3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.80005 21L9.80005 6.5L16.8 6.5C22.8 6.5 22.8 15.5 16.8 15.5H12.5L11.3 21H6.80005Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
