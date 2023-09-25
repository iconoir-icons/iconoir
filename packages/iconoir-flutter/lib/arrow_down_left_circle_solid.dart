import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ArrowDownLeftCircleSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ArrowDownLeftCircleSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM15.3588 9.70172C15.6517 9.40883 15.6517 8.93395 15.3588 8.64106C15.0659 8.34816 14.5911 8.34816 14.2982 8.64105L9.92163 13.0176V9.87849C9.92163 9.46427 9.58584 9.12849 9.17163 9.12849C8.75742 9.12849 8.42163 9.46427 8.42163 9.87849V14.8282C8.42163 15.2424 8.75742 15.5782 9.17163 15.5782H14.1214C14.5356 15.5782 14.8714 15.2424 14.8714 14.8282C14.8714 14.414 14.5356 14.0782 14.1214 14.0782H10.9823L15.3588 9.70172Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}