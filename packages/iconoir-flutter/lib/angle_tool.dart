import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AngleTool extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const AngleTool({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21L3 3L9 3V15L21 15V21H3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 19V21" stroke="currentColor" stroke-linecap="round"/>
<path d="M9 19V21" stroke="currentColor" stroke-linecap="round"/>
<path d="M3 7H5" stroke="currentColor" stroke-linecap="round"/>
<path d="M3 11H5" stroke="currentColor" stroke-linecap="round"/>
<path d="M3 15H5" stroke="currentColor" stroke-linecap="round"/>
<path d="M17 19V21" stroke="currentColor" stroke-linecap="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
