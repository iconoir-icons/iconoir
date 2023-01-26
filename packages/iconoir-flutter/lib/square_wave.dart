import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SquareWave extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SquareWave({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12H6L6 4L12 4L12 20L18 20L18 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 12H15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 12H9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
