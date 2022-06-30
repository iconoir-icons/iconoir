import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class VoiceScan extends StatelessWidget {
  const VoiceScan({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/VoiceScan.svg');
}
