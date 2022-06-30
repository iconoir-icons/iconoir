import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class VoiceCircledLock extends StatelessWidget {
  const VoiceCircledLock({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/VoiceCircledLock.svg');
}
