import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class IosSettings extends StatelessWidget {
  const IosSettings({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/IosSettings.svg');
}
