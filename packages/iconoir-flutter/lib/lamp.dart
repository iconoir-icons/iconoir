import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Lamp extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Lamp({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 21H12M15 21H12M12 21L12 11M12 7L12 11M12 11L6 11L9 3H15L18 11H12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
