import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class VoiceCircled extends StatelessWidget {
  const VoiceCircled({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/VoiceCircled.svg');
}
