import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class OrthogonalView extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const OrthogonalView({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21V3H21V21H3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 16.5H12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 7.5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 3V12V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 3V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
