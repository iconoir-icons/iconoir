import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ProjectCurve3D extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ProjectCurve3D({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21C7.02944 21 3 19.2091 3 17C3 14.7909 7.02944 13 12 13C16.9706 13 21 14.7909 21 17C21 19.2091 16.9706 21 12 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 2C13.6569 2 15 3.34315 15 5V6H9V5C9 3.34315 10.3431 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 15.5L7.5 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5 15.5L16.5 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
