import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Hourglass extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Hourglass({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12C15.866 12 19 8.86599 19 5H5C5 8.86599 8.13401 12 12 12ZM12 12C15.866 12 19 15.134 19 19H5C5 15.134 8.13401 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 2L12 2L19 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 22H12L19 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
