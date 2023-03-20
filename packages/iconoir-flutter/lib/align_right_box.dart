import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AlignRightBox extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const AlignRightBox({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00563 20.005L8.01674 19.995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.00563 20.005L4.01674 19.995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.00563 16.005L4.01674 15.995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.00563 12.005L4.01674 11.995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.00563 8.005L4.01674 7.995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.00563 4.005L4.01674 3.995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.00563 4.005L8.01674 3.995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0059 20.005H20.0059V4.005H12.0059V20.005Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
