import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PcWarning extends StatelessWidget {
  const PcWarning({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/PcWarning.svg');
}
