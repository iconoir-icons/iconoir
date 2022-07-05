import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class StatDown extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const StatDown({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 10L12 18L15 15L20 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 4V12M16 12L19 9M16 12L13 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
