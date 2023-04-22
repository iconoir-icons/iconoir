import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ArrowTopLeft extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ArrowTopLeft({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 19L6 6M6 6L6 18.48M6 6L18.48 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
