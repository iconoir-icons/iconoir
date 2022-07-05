import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Reduce extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Reduce({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 20L9 15M9 15V19M9 15H5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 4L15 9M15 9V5M15 9H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
