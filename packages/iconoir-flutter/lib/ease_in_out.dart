import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class EaseInOut extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const EaseInOut({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 20C11 20 13 4 21 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
