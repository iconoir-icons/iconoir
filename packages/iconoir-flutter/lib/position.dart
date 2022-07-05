import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Position extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Position({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 19V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5V3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
