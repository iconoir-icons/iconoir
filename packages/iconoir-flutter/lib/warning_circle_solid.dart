import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class WarningCircleSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const WarningCircleSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V7C11.25 6.58579 11.5858 6.25 12 6.25ZM12.5675 17.5008C12.8446 17.1929 12.8196 16.7187 12.5117 16.4416C12.2038 16.1645 11.7296 16.1894 11.4525 16.4973L11.4425 16.5084C11.1654 16.8163 11.1904 17.2905 11.4983 17.5676C11.8062 17.8447 12.2804 17.8197 12.5575 17.5119L12.5675 17.5008Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}