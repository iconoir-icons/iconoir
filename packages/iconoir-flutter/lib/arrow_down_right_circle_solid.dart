import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ArrowDownRightCircleSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ArrowDownRightCircleSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.70172 8.64106C9.40882 8.34816 8.93395 8.34816 8.64106 8.64106C8.34816 8.93395 8.34816 9.40882 8.64106 9.70172L13.0176 14.0782H9.8785C9.46428 14.0782 9.1285 14.414 9.1285 14.8282C9.1285 15.2424 9.46428 15.5782 9.8785 15.5782H14.8282C14.9299 15.5782 15.0269 15.558 15.1153 15.5213C15.2038 15.4847 15.2866 15.4305 15.3585 15.3585C15.4305 15.2866 15.4847 15.2038 15.5213 15.1153C15.558 15.0269 15.5782 14.9299 15.5782 14.8282V9.87849C15.5782 9.46427 15.2424 9.12849 14.8282 9.12849C14.414 9.12849 14.0782 9.46427 14.0782 9.87849V13.0176L9.70172 8.64106Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}