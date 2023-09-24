import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ReportsSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ReportsSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="16" y="3" width="5" height="18" rx="2" fill="currentColor"/>
<rect x="9.5" y="9" width="5" height="12" rx="2" fill="currentColor"/>
<rect x="3" y="16" width="5" height="5" rx="2" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
