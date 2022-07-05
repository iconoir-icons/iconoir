import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ExpandLines extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ExpandLines({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2L6 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 22L6 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14V19M12 19L15 16M12 19L9 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 10V5M12 5L15 8M12 5L9 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
