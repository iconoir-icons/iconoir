import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ArrowLeftCircleSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ArrowLeftCircleSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM10.9697 16.0303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L10.9697 7.96967C11.2626 7.67678 11.7374 7.67678 12.0303 7.96967C12.3232 8.26256 12.3232 8.73744 12.0303 9.03033L9.81066 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H9.81066L12.0303 14.9697C12.3232 15.2626 12.3232 15.7374 12.0303 16.0303C11.7374 16.3232 11.2626 16.3232 10.9697 16.0303Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
