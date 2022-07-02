import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CompressLines extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CompressLines({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2L6 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 22L6 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5V10M12 10L15 7M12 10L9 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 19V14M12 14L15 17M12 14L9 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
