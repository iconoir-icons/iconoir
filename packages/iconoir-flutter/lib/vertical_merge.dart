import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class VerticalMerge extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const VerticalMerge({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2V10M12 10L15.5 6.5M12 10L8.5 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22V14M12 14L15.5 17.5M12 14L8.5 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 14L21 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 10L21 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
