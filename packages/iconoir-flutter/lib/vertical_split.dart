import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class VerticalSplit extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const VerticalSplit({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 14V22M12 22L15.5 18.5M12 22L8.5 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 10V2M12 2L15.5 5.5M12 2L8.5 5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 14L21 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 10L21 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
