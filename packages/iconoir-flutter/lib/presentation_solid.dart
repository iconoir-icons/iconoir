import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PresentationSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PresentationSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 17.4697C12.2374 17.1768 11.7626 17.1768 11.4697 17.4697L7.96967 20.9697C7.67678 21.2626 7.67678 21.7374 7.96967 22.0303C8.26256 22.3232 8.73744 22.3232 9.03033 22.0303L12 19.0607L14.9697 22.0303C15.2626 22.3232 15.7374 22.3232 16.0303 22.0303C16.3232 21.7374 16.3232 21.2626 16.0303 20.9697L12.5303 17.4697Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.4 18.75C22.1456 18.75 22.75 18.1456 22.75 17.4V4.6C22.75 3.85442 22.1456 3.25 21.4 3.25H2.6C1.85442 3.25 1.25 3.85441 1.25 4.6V17.4C1.25 18.1456 1.85442 18.75 2.6 18.75H21.4ZM9.75 12C9.75 11.5858 9.41421 11.25 9 11.25C8.58579 11.25 8.25 11.5858 8.25 12V14C8.25 14.4142 8.58579 14.75 9 14.75C9.41421 14.75 9.75 14.4142 9.75 14V12ZM12 9.25C12.4142 9.25 12.75 9.58579 12.75 10V14C12.75 14.4142 12.4142 14.75 12 14.75C11.5858 14.75 11.25 14.4142 11.25 14V10C11.25 9.58579 11.5858 9.25 12 9.25ZM15.75 8C15.75 7.58579 15.4142 7.25 15 7.25C14.5858 7.25 14.25 7.58579 14.25 8V14C14.25 14.4142 14.5858 14.75 15 14.75C15.4142 14.75 15.75 14.4142 15.75 14V8Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
