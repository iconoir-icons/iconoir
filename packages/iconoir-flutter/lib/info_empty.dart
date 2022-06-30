import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class InfoEmpty extends StatelessWidget {
  const InfoEmpty({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/InfoEmpty.svg');
}
