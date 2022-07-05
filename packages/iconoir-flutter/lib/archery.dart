import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Archery extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Archery({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12H18M7 12L5 10H1L3 12L1 14H5L7 12ZM18 12L16 10M18 12L16 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 22C20.5376 22 23 17.5228 23 12C23 6.47715 20.5376 2 17.5 2C14.4624 2 12 6.47715 12 12C12 17.5228 14.4624 22 17.5 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
