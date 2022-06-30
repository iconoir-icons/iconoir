import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class NewTab extends StatelessWidget {
  const NewTab({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/NewTab.svg');
}
