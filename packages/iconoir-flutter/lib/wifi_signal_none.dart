import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class WifiSignalNone extends StatelessWidget {
  const WifiSignalNone({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/WifiSignalNone.svg');
}
